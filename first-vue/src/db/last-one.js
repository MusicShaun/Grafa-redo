const obj = {
  title: 'Dividends',
  heading: 'These companies have flagged a dividend',

  headers: [
    'COMPANY',
    'EX-DATE',
    'AMOUNT',
    'FRANKING',
    'TYPE',
    'PAY DATE'
  ],
  companies: [
    {
      company: 'WAM CAPITAL LIMITED',
      symbol: 'WAM',
      exDate: 'May 15, 2023',
      amount: '$0.078',
      franking: '100%',
      type: 'Interim',
      payDate: 'May 26, 2023'
    },
    {
      company: 'ANZ GROUP HOLDINGS LIMITED',
      symbol: 'ANZ',
      exDate: 'May 15, 2023',
      amount: '$0.81',
      franking: '100%',
      type: 'Interim',
      payDate: 'Jul 3, 2023'
    },
    {
      company: 'MACQUARIE GROUP LIMITED',
      symbol: 'MQG',
      exDate: 'May 15, 2023',
      amount: '$4.50',
      franking: '40%',
      type: 'Final',
      payDate: 'Jul 4, 2023'
    },
    {
      company: 'AUTOSPORTS GROUP LIMITED.',
      symbol: 'ASG',
      exDate: 'May 16, 2023',
      amount: '$0.090',
      franking: '100%',
      type: 'Interim',
      payDate: 'May 31, 2023'
    },
    {
      company: 'SANDON CAPITAL INVESTMENTS LIMITED',
      symbol: 'SNC',
      exDate: 'May 16, 2023',
      amount: '$0.028',
      franking: '100%',
      type: 'Interim',
      payDate: 'Jun 2, 2023'
    }
  ]
}

export default obj;