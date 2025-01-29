import React from "react";

const withFilter = (OriginalComponent: any, data: any) => {
  class hocNew extends React.Component {
    state: any;
    props: any;
    constructor(props: any) {
      super(props);
      this.state = {
        inputVal: "",
        originalData: data,
        filteredData: data,
      };
    }

    filterList(e: any) {
      let tempdata = data.filter((item: any) => {
        return item.indexOf(e.target.value) > 0;
      });
      console.log(tempdata);
      if (e.target.value == "") {
        this.setState({ ...this.state, filteredData: data, inputVal: e.target.value });
      } else {
        this.setState({ ...this.state, filteredData: tempdata, inputVal: e.target.value });
      }
    }

    render() {
      return (
        <>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={(e) => {
              this.filterList(e);
            }}
          />
          <OriginalComponent filterListData={this.state.filteredData} />
        </>
      );
    }
  }

  return hocNew;
};

export default withFilter;
