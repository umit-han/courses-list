import { useState, useEffect } from "react";
import axios from "axios";
import CardAll from "../components/CardAll";
import CardMy from "../components/CardMy";


const CoursesList = () => {

const [tab, setTab] = useState('all');
const [allCoursesData, setAllCoursesData] = useState([]);
const [myCoursesData, setMyCoursesData] = useState([]);

   useEffect(() => {
    const getCoureseAll = async () =>{
        const responseAll = await axios.get(`https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses`);
        let allData =  await responseAll.data
        setAllCoursesData(allData);
    }

    const getCoureseMy = async () =>{
        const responseMy = await axios.get(`https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses`);
        let myData = await responseMy.data;
        setMyCoursesData(myData);
    }

    getCoureseAll();
    getCoureseMy();

   },[]);

   return (
        <main className="main">
            <section className="section-tab">
                <div className="container pb-md">
                   <div className="tab mt-md">
                        <div className="tab__header">
                            <h1 className={`tab__btn ${tab === 'all' ? 'active' : ''}`} onClick={() =>{ setTab('all')}}>All Courses</h1>
                            <h1 className={`tab__btn ${tab === 'my' ? 'active' : ''}`} onClick={() =>{setTab('my')}}>My Courses</h1>
                        </div>
                        <div className="tab__content flex justify-center mt-xl">
                            {
                                tab === 'all' &&
                                <div className="courses col-3-md-2-sm-1">
                                    <CardAll coursData={allCoursesData}/>
                                </div>
                            }
                            {
                                tab === 'my' &&
                                <div className="courses col-3-md-2-sm-1">
                                    <CardMy coursData={myCoursesData}/>
                                </div>
                            }
                        </div>
                   </div>
                </div>
            </section>
        </main>
    )
}


//   axios.get(`https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses`)
//     .then(response => {
//       setAllCoursesData(response.data)
//     })


//     const getStaticProps = async () => {
//   try {
//     const resAll = await axios.get('https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses');
//     const resMy = await axios.get('https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses');
//     const allCoursesData = resAll.data;
//     const myCoursesData = resMy.data;
//     return {
//       props: {
//         allCoursesData,
//         myCoursesData
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }



    
  
export default CoursesList