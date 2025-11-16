import CollegeNestedLoop from "./CollegeNestedLoop";

function HandleNestedLoop() {

  const collegeData = [
    {
      name: "University of Wisconsin-Madison",
      city: "Phoenix",
      website: "www.wisconsinmadison.com",
      student: [
        {
          name: "Emily Johnson",
          age: 29,
          email: "emily.johnson@x.dummyjson.com"
        },
        {
          name: "Michael Williams",
          age: 31,
          email: "michael.williams@x.dummyjson.com"
        },
        {
          name: "Sophia Brown",
          age: 21,
          email: "sophia.brown@x.dummyjson.com",
        }
      ]
    },
    {
      name: "University of Southern California",
      city: "Fort Worth",
      website: "www.southerncalifornia.com",
      student: [
        {
          name: "James Davis",
          age: 20,
          email: "james.davis@x.dummyjson.com"
        },
        {
          name: "Emma Miller",
          age: 25,
          email: "emma.miller@x.dummyjson.com"
        },
        {
          name: "Olivia Olivia",
          age: 30,
          email: "olivia.wilson@x.dummyjson.com",
        }
      ]
    },
    {
      name: "University of Illinois-Urbana-Champaign",
      city: "Indianapolis",
      website: "www.illinoisurbanachampaign.com",
      student: [
        {
          name: "Alexander Jones",
          age: 19,
          email: "alexander.jones@x.dummyjson.com"
        },
        {
          name: "Ava Taylor",
          age: 36,
          email: "ava.taylor@x.dummyjson.com"
        },
        {
          name: "Ethan Martinez",
          age: 22,
          email: "ethan.martinez@x.dummyjson.com",
        }
      ]
    }
  ];

  return (
    <div>
      <h2>Handle Nested Looping</h2>
      {
        collegeData.map((college, index) => (
          <div key={index}>
            <CollegeNestedLoop college={college}/>
          </div>
        ))
      }
    </div>
  )
}

export default HandleNestedLoop;