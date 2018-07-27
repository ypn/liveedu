import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../../logo.svg';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Collapse from '@material-ui/core/Collapse';


const styles = {
  content:{
    marginTop:25,
    marginBottom:35,
    marginRight:24,
    marginLeft:24
  },
  card: {
    width:'100%',
    borderRadius:0,
    paddingBottom:15
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  logo:{
    width:80
  },
  flex: {
    flex: 1,
  },

  form_login:{
    display:'inline-flex'
  },

  input:{
    width:'100%'
  },
  card_external:{
    margin:15,
    marginTop:5,
    fontSize:12
  },

  input_login:{
    height:24,
    marginRight:15
  },
  icon:{color:'#aaa'}
};


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      checked:false
    }
  }


  toggleRegisterTrainer(){
    this.setState({
      checked:!this.state.checked
    });
  }

  render(){

    const { classes } = this.props;
    const { checked } = this.state;
    var auth = true
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <img className={classes.logo} src={logo}/>
            <Typography variant="title" color="inherit" className={classes.flex}>
              PANTHEON
            </Typography>

            <div className={classes.form_login}>
                <input
                  id="email"
                  placeholder='Email'
                  type="email"
                  className={classes.input_login}

                />
              <input
                  id="password"
                  type="password"
                  placeholder='Mật khẩu'
                  className={classes.input_login}
                />
              <Button variant="contained" size="small" color="default"
                style={{
                  minHeight:23,
                  height:23,
                  padding:'0 10px',
                  fontSize:'0.733rem',
                  borderRadius:0
                }}>
                Đăng nhập
              </Button>
            </div>

          </Toolbar>
        </AppBar>

        <div className={classes.content}>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/lPqmbx7y8_g" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </Grid>
          <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent>
              <div style={{marginBottom:15}}>
                <Typography variant="title">
                  Đăng ký
                </Typography>
              </div>

              <FormControl style={{width:'48%'}}>
                <InputLabel htmlFor="input-with-icon-adornment">Họ</InputLabel>
                <Input
                  startAdornment={
                    <InputAdornment position="start">
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl style={{width:'48%',float:'right'}}>
                <InputLabel htmlFor="input-with-icon-adornment">Tên</InputLabel>
                <Input
                  startAdornment={
                    <InputAdornment position="start">
                    </InputAdornment>
                  }
                />
              </FormControl>
              <br/><br/>
              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    className={classes.input}
                    startAdornment={
                      <InputAdornment position="start">
                        <i className="material-icons" style={{color:'#aaa'}}>email</i>
                      </InputAdornment>
                    }
                  />
              </FormControl><br/><br/>

              <FormControl className={classes.input}>
                <InputLabel htmlFor="input-with-icon-adornment">Mật khẩu</InputLabel>
                <Input
                  id="password"
                  type="password"
                  className={classes.input}
                  startAdornment={
                    <InputAdornment position="start">
                      <i className="material-icons" style={{color:'#aaa'}}>lock</i>
                    </InputAdornment>
                  }
                />
            </FormControl><br/><br/>

              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Nhập lại mật khẩu</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    className={classes.input}
                    startAdornment={
                      <InputAdornment position="start">
                        <i className="material-icons" style={{color:'#aaa'}}>lock</i>
                      </InputAdornment>
                    }
                  />
              </FormControl><br/><br/>

            <FormControlLabel
              control={
                <Checkbox

                  color="primary"
                  checked={checked} onChange={this.toggleRegisterTrainer.bind(this)}
                />
              }
              label="Đăng ký làm giảng viên"
            />

          <div>

            <Collapse in={checked}>

              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Công việc hiện tại</InputLabel>
                  <Input className={classes.input}/>
              </FormControl><br/><br/>

              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Kiến thức chuyên môn</InputLabel>
                  <Input className={classes.input}/>
              </FormControl><br/><br/>

              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Facebook cá nhân</InputLabel>
                  <Input className={classes.input}/>
              </FormControl><br/><br/>

              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Số điện thoại</InputLabel>
                  <Input className={classes.input}/>
              </FormControl><br/><br/>

              <FormControl className={classes.input}>
                  <InputLabel htmlFor="input-with-icon-adornment">Skype,Zalo</InputLabel>
                  <Input className={classes.input}/>
              </FormControl><br/><br/>



            </Collapse>

          </div>

            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">
                Đăng ký
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </div>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
