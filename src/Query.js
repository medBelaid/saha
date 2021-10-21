const githubQuery = (pageCount, queryString, paginationKeyWord, paginationString) => {
    return {
        query: `
    {
        viewer {
            name
        }
        search(query: "${queryString} sort:updated-desc", type: REPOSITORY, ${paginationKeyWord}: ${pageCount}, ${paginationString}) {
            repositoryCount
            edges {
                cursor
                node {
                    ... on Repository {
                        name
                        description
                        id
                        url
                    }
                }
            }
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
      }
    }
  `
  };
}
export default githubQuery
