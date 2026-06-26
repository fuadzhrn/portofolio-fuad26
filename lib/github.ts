// Fetch GitHub contribution calendar via GraphQL API.
// Requires GITHUB_TOKEN in .env.local with read:user scope.
// Returns null on missing token or API error — UI handles gracefully.

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionData = {
  totalContributions: number;
  weeks: ContributionDay[][];
};

export const GITHUB_USERNAME = "fuadzhrn";

const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

function toLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export async function fetchContributions(): Promise<ContributionData | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    const calendar =
      json?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) return null;

    const weeks: ContributionDay[][] = calendar.weeks.map(
      (week: {
        contributionDays: { contributionCount: number; date: string }[];
      }) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: toLevel(day.contributionCount),
        }))
    );

    return { totalContributions: calendar.totalContributions, weeks };
  } catch {
    return null;
  }
}
