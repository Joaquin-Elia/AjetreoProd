export const FormNewsletter = () => {
  return (
    <>  
        <form 
          className='footer-newsletter-form'
          action="https://ajetreoprod.us6.list-manage.com/subscribe/post?u=8b37e8c833a04a74f7ccd8505&amp;id=c68c2417fd&amp;f_id=00c22ae3f0" 
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target='_blank'
        >
          <label
            className='footer-newsletter-label'
            htmlFor="email"
          >
            Correo
          </label>
          <input
            type="email"
            name='EMAIL'
            id='mce-EMAIL'
            className='footer-newsletter-input'
            autoCapitalize="off" 
            autoCorrect="off"
            required
            pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
          />
          <div id="mce-responses" className="clear foot">
		        <div className="response" id="mce-error-response" style={{display: 'none'}} />
		        <div className="response" id="mce-success-response" style={{display: 'none'}} />
          </div> 
          <button
            className='footer-newsletter-btn'
            type="submit"
          >
            Quiero los beats!
          </button>
        </form>
    </>
  )
}
