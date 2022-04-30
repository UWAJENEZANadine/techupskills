import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "antd";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function App() {
  return (
    
    <div className="container-fluid first-container">
     
      <div className="second-container">
      <img src="https://dynamic.brandcrowd.com/preview/logodraft/391c2837-c3ae-46e4-a767-d1268d1b1a30/image/large.png"  style={{width:"50px", height:"50px" , margin:"1rem 0rem 0rem 3rem"}}/>
        <div className="leftside-container"></div>
        <div className="line-container">
          <div className="form-container container ">
            <div className="row justify-content around">
              <div className="col-10 col-sm-10 col-md-7 col-lg-7 col1 ">
                <h1>
                  Fill the form.
                  <br />
                  it's easy.{" "}
                </h1>
                <Box className="box-container">
                  <TextField
                    id="standard-basic"
                    label="First ame"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    style={{ marginLeft: "20px" }}
                  />
                  <br /><br />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                  <br />
                  <br />
                  <br />
                  <p>
                    Briefly tell us about your project and your current goals .
                    how can we help you?{" "}
                  </p>

                  <TextField
                    id="standard-basic"
                    variant="standard"
                    style={{ marginTop: "-20px", width: "100%" }}
                  />

                  <Button
                    type="primary"
                    htmlType="submit"
                    className="send-form-button"
                  >
                    send message
                  </Button>
                </Box>
              </div>
              <div className="col-10 col-sm-10 col-md-4 col-lg-4 col2">
                <h1>Need presentation?</h1>
                <p>
                  You like what we do, but you need to demonstrate your team as
                  well.Easy! Directly download, print or share the link to a PDF
                  with your colleagues
                </p>
                <ArrowCircleDownIcon /><span style={{opacity:"0.5"}}>Company profile.PDF</span> 
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
