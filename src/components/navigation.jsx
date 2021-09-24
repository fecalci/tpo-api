export const Navigation = (props) => {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
              Calcitanium Pediatría
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#about' className='page-scroll'>
                  Nosotros
                </a>
              </li>
              <li>
                <a href='/char' className='page-scroll'>
                  Percentiles
                </a>
              </li>
              <li>
                <a href='#contact' className='page-scroll'>
                  Contacto
                </a>
              </li>
              <li>
                <a href='/vacreg' className='page-scroll'>
                  Calendario
                </a>
              </li>
              <li>
                <a href='/login' className='page-scroll'>
                  Ingresar
                </a>
              </li>      
              <li>
                <a href='/profile' className='page-scroll'>
                  Perfil
                </a>
              </li>           
            </ul>
          </div>
        </div>
      </nav>
    )
  }