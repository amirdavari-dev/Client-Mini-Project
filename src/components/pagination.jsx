import _ from "lodash"

const Pagination = ({ pages, setPage, activePage }) => {
    const previousPage = () => {
        setPage(oldPage => {
            let prePage = oldPage - 1;
            if (prePage < 1) {
                prePage = pages
            }
            return prePage
        })
    }
    const nextPage = ()=>{
        setPage(oldPage =>{
            let next = oldPage + 1;
            if(next > pages){
                next = 1;
            }
            return next
        })
    }
    return (
        <nav>
            <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
                <li onClick={previousPage} className="page-item">
                    <a href="#" className="page-link">قبلی</a>
                </li>
                {_.times(pages, (index) => {
                    return (
                        <li
                            onClick={() => setPage(index + 1)}
                            className={` page-item ${index + 1 === activePage ? "active" : ""} `}
                            key={`pagination-` + index}
                        >
                            <a href="#" className="page-link">
                                {index + 1}
                            </a>
                        </li>
                    )
                })}
                <li onClick={nextPage} className="page-item">
                    <a href="#" className="page-link">بعدی</a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination