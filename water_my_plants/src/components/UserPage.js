import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

const initialFormValues = {
    username: '',
    primaryemail: '',
    password: ''
}

function UserPage() {
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  useEffect(() => {
    axiosWithAuth()
      .get("https://watermyplantunit4.herokuapp.com/users/getuserinfo")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveUser = e => {
    e.preventDefault()
    axiosWithAuth()
    .patch(`/users/user/${user.userid}`, formValues)
    .then((res) => {
      setEditing(false);
      setUser(initialFormValues);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  const change = (e) => {
    e.persist();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://icon-library.net/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg"
            title="no user image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              Username: {user.username}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              Email: {user.primaryemail}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              You currently have 4 plants you are keeping track of.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button onClick={() => setEditing(true)}>Edit Information</Button>
      </Card>
        {editing && (
        <form onSubmit={saveUser} style={{display: 'flex', flexDirection: 'column'}}>
          <legend>Edit User:</legend>
          <TextField
            onChange={change}
            name="username"
            value={formValues.username}
            label="Username"
          />
          <TextField
            onChange={change}
            name="primaryemail"
            value={formValues.primaryemail}
            label="Email"
          />
          <TextField
            onChange={change}
            name="password"
            value={formValues.password}
            label="Password"
            type="password"
          />
          <div className="button-row">
            <Button type="submit" color="secondary">save</Button>
            <Button onClick={() => setEditing(false)}>cancel</Button>
          </div>
        </form>
        )}
    </>
  );
}

export default UserPage;
