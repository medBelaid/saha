import axios from "axios";
import { RecursiveComponent } from "./RecursiveComponent";
import { DangerBtn, SuccessBtn } from "./partiallyApply";
import SearchBox from "./SearchBox";
import recursive from './recursive.json';
import github from "./db";
import query from "./Query";
import RepoInfo from "./RepoInfo";
import styled from "styled-components";
import { Text } from "./App";
import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { ResourceLoader } from "./ResourceLoader";
import { printProps } from "./printProps";
import { RegularList } from "./RegularList";
import people from './people';
import { LargePersonListItem } from "./people/LargePersonListItem";
import NavButtons from "./NavButtons";

const commonStyle = (backgroundColor) => ({
    height: '95vh',
    padding: 10,
    margin: 10,
    backgroundColor
  });

const LargeList = styled.div`
  ${{...commonStyle('#eee')}}
`
const RegularListWrapped = printProps(RegularList);

const Left = ({ name }) => {
    const [loading, setLoading] = useState(false);
    let [repoList, setRepoList] = useState(null);
    let [pageCount, setPageCount] = useState(5);
    let [queryString, setQueryString] = useState("react");
    let [totalCount, setTotalCount] = useState(null);

    let [startCursor, setStartCursor] = useState(null);
    let [endCursor, setEndCursor] = useState(null);
    let [hasPreviousPage, setHasPreviousPage] = useState(false);
    let [hasNextPage, setHasNextPage] = useState(true);
    let [paginationKeyWord, setPaginationKeyWord] = useState("first");
    let [paginationString, setPaginationString] = useState("");

    useEffect(() => {
        setLoading(true);
        axios(github.baseUrl, {
          method: "POST",
          headers: github.headers,
          data: JSON.stringify(query(pageCount, queryString, paginationKeyWord, paginationString))
        })
        .then((response) => {
            setLoading(false);
            setRepoList(response.data.data.search.edges);
            setTotalCount(response.data.data.search.repositoryCount)
            setStartCursor(response.data.data.search.pageInfo?.startCursor);
            setEndCursor(response.data.data.search.pageInfo?.endCursor);
            setHasNextPage(response.data.data.search.pageInfo?.hasNextPage);
            setHasPreviousPage(response.data.data.search.pageInfo?.hasPreviousPage);
        })
        .catch(err => {
          console.log(err)
        })
  }, [pageCount, paginationKeyWord, paginationString, queryString]);
    return (
      <Layout leftWeight={1} rightWeight={1}>
        <LargeList>
          <ResourceLoader resourceName="message" getData={() => name}>
            <Text />
          </ResourceLoader>
          <RegularListWrapped a={1} b={"Mardi"} items={people} resourceName="person" itemComponent={LargePersonListItem}/>
          <div className="btn-group btn-group-toggle">
            <DangerBtn>Warning!</DangerBtn>
            <SuccessBtn>Success!</SuccessBtn>
          </div>
        </LargeList>
        <LargeList>
          <ResourceLoader resourceName="message" getData={() => "Recursive Component"}>
              <Text />
        </ResourceLoader>
        <RecursiveComponent data={recursive} />
        </LargeList>
        <>
          <select class="form-select" size="3" aria-label="size 3 select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            <SearchBox
              totalCount={totalCount}
              pageCount={pageCount}
              queryString={queryString}
              onTotalChange={(myNumber) => {setPageCount(myNumber)}}
              onQueryChange={(myString) => {setQueryString(myString)}}
            />
            <NavButtons
                start={startCursor}
                end={endCursor}
                next={hasNextPage}
                previous={hasPreviousPage}
                onPage={(myKeyword, myString) => {
                    setPaginationKeyWord(myKeyword);
                    setPaginationString(myString);
                }}
            />
            {loading ? (
                <div class="spinner-border text-info" role="status" />
            ) : repoList && (
              <ul className="list-group">
                {repoList.map(repo => <RepoInfo key={repo.node.id} repo={repo.node} />)}
              </ul>
            )}
            </>
      </Layout>
    );
  }
  export default Left;

