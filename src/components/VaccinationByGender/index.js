// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  console.log(vaccinationByGender)
  return (
    <div className="vaccination-gender-container">
      <h1 className="heading">Vaccination By Gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          startAngle={180}
          endAngle={0}
          data={vaccinationByGender}
          dataKey="count"
          innerRadius="30%"
          outerRadius="60%"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#64c2a6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
