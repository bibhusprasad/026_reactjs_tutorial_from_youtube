
import './css/external-style.css'

function StylingExternal() {
  return (
    <div>
      <h2 className='heading'>External Styling in React</h2>

      <div className='container'>

        <div className='card-style'>
          <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div className='name-style'>
            <h4>Bibhu Prasad Samal</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div className='card-style'>
          <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div className='name-style'>
            <h4>Dibyansh Samal</h4>
            <p>Student</p>
          </div>
        </div>

        <div className='card-style'>
          <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div className='name-style'>
            <h4>Bibhu Prasad Samal</h4>
            <p>Software Developer</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StylingExternal;