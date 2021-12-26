import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Modal from '@material-ui/core/Modal';


import "./NewCard.css"
 

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width: 345,
      height:460,
      border: '0.5px solid black',
      borderRadius: 30,
      marginBottom: 25,
      marginLeft: 25
    },
    media: {
      height: 250,
    },

    content: {
        height: 400,
        
    },
    title: {
        fontSize: 27
    },
    body: {
        fontSize: 17,
        fontWeight: 200
        
    }

  });

export default function NewCard(props) {
    const classes = useStyles();

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () =>{
        setIsOpen(true);
    };

    const handleClose = () =>{
        setIsOpen(false);
    };

    return (
        <div>
            <Card className={classes.root} onClick = {handleOpen}>
                <CardActionArea>
                    <CardMedia className= {classes.media} image = {props.image} title={props.title} />
                    <CardContent className={classes.content}>
                      <h1 className={classes.title}>{props.title}</h1>
                      <br />
                      <h1 className={classes.body}>{props.body}</h1>
                    </CardContent>


                </CardActionArea>
            </Card>
            <Modal open = {isOpen} onClose= {handleClose} className = "modal-style">
                <div className="modal-container">
                    <h1 className="modal-title">{props.title}</h1>
                    <div className="modal-text">
                        <h3>{props.modalText}</h3>
                    </div>
                    
                    <div className="pic-container">
                       {props.gallery}


                    </div>
                </div>
                
            </Modal>
        </div>
    )

}
