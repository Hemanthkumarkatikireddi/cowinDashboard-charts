// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationDataCoverage} = props

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  console.log(vaccinationDataCoverage)
  return (
    <div className="vaccination-container">
      <h1 className="heading">Vaccination Coverage</h1>
      <BarChart
        className="bar"
        width={1000}
        height={300}
        // width={1000} height={300}
        data={vaccinationDataCoverage}
        margin={{top: 15, right: 20, left: 10, bottom: 5}}
      >
        <XAxis dataKey="vaccineDate" tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{stroke: 'gray', strokeWidth: 1}}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="dose 1"
          fill="#5a8dee"
          barSize="20%"
          radius={[0, 20, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="dose 2"
          fill="#f54394"
          barSize="20%"
          radius={[0, 20, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
