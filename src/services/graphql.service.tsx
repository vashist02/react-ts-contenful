export class GraphQLService {
  private readonly spaceId: string | undefined =
    process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  private readonly bearerToken: string | undefined =
    process.env.REACT_APP_BEARER_TOKEN;

  /**
   * Service method to fetch for data from Contentful using GraphQL queries.
   *
   * @param method The HTTP method, can be POST or GET.
   * @param query The GraphQL query to search for.
   * @returns The data fetched from Contentful in a Promise.
   */
  public fetch(method: HTTPMethodsType, query: string): Promise<Response> {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${this.spaceId}/`,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.bearerToken}`,
        },
        body: JSON.stringify({ query }),
      }
    );
  }
}

export type HTTPMethodsType = 'GET' | 'POST' | 'PUT' | 'DELETE';
