import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 1em;
    margin: 0;
    padding: 0;
`;
const Pane = styled.div`
    flex: ${(props) => props.weight};
`;

export const Layout = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
    middleWeight = 1
}) => {
    const [left, right, middle] = children;
    return (
        <Container>
            <div className="row">
                <Pane weight={leftWeight} className="col-md-12">{left}</Pane>
                <Pane weight={rightWeight} className="col-md-12">{right}</Pane>
            {middle && <Pane weight={middleWeight}>{middle}</Pane>}
            </div>
        </Container>
    );
}
