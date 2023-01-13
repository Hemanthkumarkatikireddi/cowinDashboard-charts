// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const pageStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {status: pageStatus.initial, vaccinationData: {}}

  componentDidMount = () => {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({status: pageStatus.inProgress})
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updateData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(each => ({
          vaccineDate: each.vaccine_date,
          dose1: each.dose_1,
          dose2: each.dose_2,
        })),
        vaccinationByAge: fetchedData.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),
        vaccinationByGender: fetchedData.vaccination_by_gender.map(
          genderType => ({
            gender: genderType.gender,
            count: genderType.count,
          }),
        ),
      }

      this.setState({vaccinationData: updateData, status: pageStatus.success})
    } else {
      this.setState({status: pageStatus.failure})
    }
  }

  pageStatus = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <VaccinationCoverage
          vaccinationDataCoverage={vaccinationData.last7DaysVaccination}
        />
        <VaccinationByGender
          vaccinationByGender={vaccinationData.vaccinationByGender}
        />
        <VaccinationByAge
          vaccinationByAges={vaccinationData.vaccinationByAge}
        />
      </>
    )
  }

  pageInProgress = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  pageFailure = () => (
    <div className="failure-page">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="heading">Something went wrong</h1>
    </div>
  )

  renderStatus = () => {
    const {status} = this.state
    switch (status) {
      case pageStatus.success:
        return this.pageStatus()
      case pageStatus.failure:
        return this.pageFailure()
      case pageStatus.inProgress:
        return this.pageInProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowinDashboard-container">
        <div className="dashboard-container">
          <div className="logo-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="main-heading">Co-WIN</h1>
          </div>
          <h1 className="heading">CoWIN Vaccination in India</h1>
          {this.renderStatus()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
