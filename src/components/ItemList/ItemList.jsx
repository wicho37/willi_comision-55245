import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({productos}) => {
    return (
        <div className="container catalogo__contenedor">
            <h2 className="text-blue-800 text-4xl mx-10">PRODUCTOS</h2>
            <hr />
            
            {/* renderizar los productos*/}
            <div className='flex flex-row flex-wrap justify-center gap-4'>
                {
                  productos.map((prod) => <ItemCard  key={prod.id} item={prod}  style="font-size: 24px;"/>)
                }
            </div>
        </div>
    )
}

export default ItemList