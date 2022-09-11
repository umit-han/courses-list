import { useState } from "react"
import ModalMy from "./ModalMy"


const CardMy = (props:any) => {
    
    let datas = props.coursData;
    const [isOpen, setIsOpen] = useState(false);
    const [searchCourses, setSearchCourses] = useState("");
    const [selectedData, setSelectedData] = useState([]);

    const hanldeClick = (data:any) => {
        setSelectedData(data)
        setIsOpen(true)
    }

    const hideModal = () => {
        setIsOpen(false);
    };


    return (
        <>
            <input 
                type="text" 
                className="input input__search"  
                onChange={(event:any) => {setSearchCourses(event.target.value)}} 
                placeholder="Search courses..."
            />
            {
                datas.filter((filterData:any) => {
                   if(searchCourses === ""){
                    return filterData
                   } else if(filterData.title.toLowerCase().includes(searchCourses.toLowerCase())) {
                    return filterData
                   }
                }).map((data:any) => (
                     <div 
                        className="card" 
                        key={data.id} 
                        onClick={() => {hanldeClick(data)}}
                    >
                        <img className="card__img" src={data.card_image} alt="image" />
                        <div className="card__info">
                            <h1 className="card__title">{data.title}</h1>
                            <p className="card__description">{data.description}</p>
                        </div>
                    </div>
                ))
            }

            { isOpen && <ModalMy detailsCourse={selectedData} handleClose={hideModal} /> }
        </>
    )
}


export default CardMy