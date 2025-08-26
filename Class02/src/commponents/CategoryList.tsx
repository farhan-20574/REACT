const CategoryList =()=> {
    const list = ['apple','orange','mango','banana']
    return(
        <div>
            <ul>
                {list.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList