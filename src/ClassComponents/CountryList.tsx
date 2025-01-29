import React, { Component } from "react";
import withFilter from "../FunctionalComponents/HOC/withFilter";

const countries = ["India", "UK", "USA", "Pakistan", "Hindustan", "Afganistan", "Nepal"];
class CountryList extends React.Component {
  state: any;
  props: any;
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>These are the list of the countries</h1>
        {this.props?.filterListData?.map((item: string) => {
          return <li>{item}</li>;
        })}
      </>
    );
  }
}
export default withFilter(CountryList, countries);
