import React, { Component } from "react"
import PostList from "./PostList"

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends Component {

    render() {

        return(
            <React.Fragment>
            <CssBaseline />
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
                    <PostList />
                </Container>
            </React.Fragment>
        )
    }
}

export default Home