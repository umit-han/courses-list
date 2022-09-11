
const ModalAll = (props:{handleClose:any, detailsCourse:any}) => {

    const detail = props.detailsCourse

    return (
        <>
            <div className={`modal fade d-block`}>
                <div className="modal__dialog">
                    {
                        <div className="modal__content">
                            <div className="modal__header">
                                <h1 className="modal__title">{detail.title.rendered}</h1>
                                <button className="modal__close-icon" onClick={props.handleClose}>X</button>
                            </div>
                            <div className="modal__body">
                                {detail.card_image && <img src={detail.card_image} alt="image" className="modal__img" />}

                                <h3 className="modal__subtitle">{detail.slug ? detail.slug : ' No explanation yet'}</h3>
                                <p className="modal__text">Price :{ detail.trial_price !== "" ? detail.trial_price : ' There is no price' }</p>
                                <p className="modal__text">
                                    Categories : { detail.categories != 0 ? <span className="modal__tag">{detail.categories}</span> : ' No category added' }
                                </p>
                                <p className="modal__text">Price Type : {detail.price_type }</p>
                                <p className="modal__text">Webinar Date : {detail.date }</p>
                                <a href={detail.link} className="modal__link">Course link</a>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}


export default ModalAll