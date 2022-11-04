import './style/links.css'


const Links = () => {

 
  return (
    <div className='link'>
      
      
        <h1 className='link_h1'>
            <ul className='link_ul'>
                <li className='link_li'><a className='link_a' href="#home">Home</a></li>
                <li className='link_li'><a className='link_a' href="#home">About me</a></li>
                <li className='link_li'><a className='link_a' href="#experience1">Experiens</a></li>
                <li className='link_li'><a className='link_a' href="#skill1">skills</a></li>
                <li className='link_li'><a className='link_a' href="#portafolio">Portafolio</a></li>
                <li className='link_li'><a className='link_a' href="#">Call me</a></li>

            </ul>
        </h1>
    </div>
  )
}

export default Links