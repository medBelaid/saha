import styled from "styled-components";
import './App.css';
import { Layout } from "./Layout";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { RegularList } from "./RegularList";
import { ResourceLoader } from "./ResourceLoader";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import React, { useState } from "react";
import people from './people';
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";
import Left from "./Left";
import "./custom.scss";

const commonStyle = (backgroundColor) => ({
  padding: 10,
  margin: 10,
  backgroundColor
});

const RightWrapper = styled.div`
  ${{...commonStyle('#feb')}}
`
export const Text = ({ message }) => <h1 className="text-primary"><i className="bi bi-diagram-2-fill" /> {message}</h1>

const StepOne = ({ goToNext }) => (
  <>
    <Text message="Step 1" />
    <button onClick={() => goToNext({ name: 'John Doe' })} className="btn btn-outline-primary btn-sm" data-cy="step1-next">Next</button>
  </>
)
const StepTwo = ({ goToNext }) => (
  <>
    <Text message="Step 2" />
    <button onClick={() => goToNext({ age: 33 })} className="btn btn-warning btn-sm">Next</button>
  </>
)
const StepThree = ({ goToNext }) => (
  <>
    <Text message="Step 3" />
    <button onClick={() => goToNext({ hairColor: 'yellow' })}>Next</button>
  </>
)
const LargeListItemWrapped = withUser(LargePersonListItem, "person");

const Right = ({ people, onboardingData, onNext, currentIndex }) => {
  return (
    <RightWrapper>
      <ResourceLoader resourceName="person" getData={() => people[0]}>
          <LargePersonListItem />
      </ResourceLoader>
      <UserInfoForm />
      <LargeListItemWrapped />
      <hr color="#aaa" />
      <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
      <UncontrolledOnboardingFlow
        onNext={onNext}
        currentIndex={currentIndex}
      >
        <StepOne />
        {onboardingData.name === "John Doe" && <StepTwo />}
        <StepThree />
      </UncontrolledOnboardingFlow>
      <div className="checkboxes" data-cy="box-2">
        {
          ["1", "2"].map(item => (
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value={item} id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                {item}
              </label>
            </div>
          ))
        }
      </div>
    </RightWrapper>
  );
}

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({...setOnboardingData, ...stepData});
    setCurrentIndex(currentIndex === 1 ? 0 : currentIndex + 1);
  }
  return (
    <Layout leftWeight={3} rightWeight={1}>
      <Left name="Large List of person" />
      <Right
        people={people}
        onboardingData={onboardingData}
        currentIndex={currentIndex}
        onNext={onNext}
      />
    </Layout>
  );
}

export default App;
