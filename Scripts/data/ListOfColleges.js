export let CollegeList = JSON.parse(localStorage.getItem('CollegeList'));

if(!CollegeList) {
  CollegeList = [
    {
      name: 'KJSIT'
    },
    {
      name: 'KJSsadsadIT'
    },
    {
      name: 'KJdsgfdgSIT'
    },
  ]
}