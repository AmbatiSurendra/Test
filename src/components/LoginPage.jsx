import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setUser } from '../actions/userActions';

function LoginPage(props) {
    const [postData, setPostData] = useState({
        email: "",
      });
    
      const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       props.setUser(postData.email)
      };
    
      return (
        <div className="container mt-5 pb-5 shadow">
          <div className="form-container">
            <p>This is a POST FORM data</p>
            <form>
              <div className="form-group">
                <label>email</label>
                <input
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={postData.email}
                />
              </div>
    
              <button onClick={handleSubmit} className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
  )
}

LoginPage.propTypes = {}
const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {setUser})(
    LoginPage
);

