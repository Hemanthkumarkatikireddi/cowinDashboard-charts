// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const vaccinationByAge = props => {
  const {vaccinationByAges} = props
  console.log(vaccinationByAges)

  return (
    <div className="vaccination-byAge-container">
      <h1 className="heading">Vaccination By Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          data={vaccinationByAges}
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="45-60" fill=" #a3df9f" />
          <Cell name="Above 60" fill=" #2cc6c6" />
        </Pie>
        <Legend
          align="center"
          iconType="circle"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default vaccinationByAge
