import React from 'react'
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    // Get all dates
    const allDates = [
        ...incomes.map((item) => dateFormat(item.date)),
        ...expenses.map((item) => dateFormat(item.date)),
    ]

    const uniqueDates = [...new Set(allDates)].sort((a, b) => new Date(a) - new Date(b))

    // Income data and point radius
    const incomeData = uniqueDates.map(date => {
        const item = incomes.find(inc => dateFormat(inc.date) === date)
        return item ? item.amount : 0
    })
    const incomePointRadius = incomeData.map(value => (value === 0 ? 0 : 5))

    // Expense data and point radius
    const expenseData = uniqueDates.map(date => {
        const item = expenses.find(exp => dateFormat(exp.date) === date)
        return item ? item.amount : 0
    })
    const expensePointRadius = expenseData.map(value => (value === 0 ? 0 : 5))

    const data = {
        labels: uniqueDates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: 'rgba(211, 211, 211, 0.5)',
                backgroundColor: 'green',
                pointBorderColor: 'green',
                pointBackgroundColor: 'green',
                pointRadius: incomePointRadius,
                pointHoverRadius: incomePointRadius,
                tension: 0.2,
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: 'rgba(211, 211, 211, 0.5)',
                backgroundColor: 'red',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red',
                pointRadius: expensePointRadius,
                pointHoverRadius: expensePointRadius,
                tension: 0.2,
            },
        ],
    }

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 70%;
`

export default Chart
