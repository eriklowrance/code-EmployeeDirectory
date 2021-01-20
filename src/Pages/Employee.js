import React, { Component } from 'react'
import JumboTron from "../components/JumboTron";
// import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Api from "../utils/Api";

class Employee extends Component {
    state= {
        employees: [],
        searchArray: [],
        search: "",
        sorted: false,
    }
    componentDidMount() {
        Api.getRandomPeople().then(response => {
            this.setState({
                employees: response.data.results,
                searchArray: response.data.results
            })
        })
    }

    sortByName = () => {
        let { employees, sorted, searchArray } = this.state
         let sortedArray;
         if (!searchArray === []) {
             sortedArray = searchArray;

         }
         if (!sorted) {
             sortedArray = employees.sort(function (a, b) {
                 return a.name.first > b.name.first ? 1: -1
             });
         }else {
             sortedArray = employees.reverse()
         }
         this.setState({
             searchArray: sortedArray,
             sorted: !sorted
         })}

    handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        this.setState({
            search: value
        },
        this.searchBar
        )
    }
    searchBar = () => {
        
        let { employees } = this.state
         let newArray = [];
          if (newArray === []) {
            newArray = employees
          }
          for (let i = 0; i < employees.length; i++) {
            if (employees[i].name.last.toLowerCase().startsWith(this.state.search)) {
              newArray.push(employees[i])
            }
          }
          this.setState({
              searchArray: newArray
            })
            
        }

    render() {
        const { searchArray } = this.state
        return (
            <>
             <JumboTron />
                <div className="input-group mb-3 row justify-content-center">
                  <div className="col-sm-4 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Employee by Last Name"
                      aria-label="Search Employee"
                      aria-describedby="basic-addon1"
                      onChange={this.handleSearch}
                    />
                  </div>
                  <button className= "btn btn-warning" onClick= {this.sortByName}>Sort by First Name</button>
                </div>
            <div>
               
                <div className= "container">
                <Table employees= {searchArray} />
    
                </div>
            </div>
            </>

        )

    }
}

export default Employee
