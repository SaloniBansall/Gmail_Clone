import {useState} from 'react';
import {Dialog,Box,Typography,styled,InputBase,TextField,Button} from '@mui/material';
import {Close,DeleteOutline} from '@mui/icons-material';


const dialogStyle={
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px 10px 0 0',
    boxShadow: 'none',
    
}
const Header =styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p':{
        fontSize: 18,
        fontWeight: 530
    }

})

const Receipnt =styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding: '10px 15px',
    '& > div':{
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: '10px'
    }
})


const Footer =styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding: '10px 15px',
    
})

const SendButton =styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width:100,

})
const ComposeMail = ({openDialog, setOpenDialog}) => {
    // const [data, setData] = useState({
    //     to: '', // Recipient email
    //     subject: '', // Email subject
    //     body: '', // Email body
    // });

    const config={
        
            Host : "smtp.elasticemail.com",
            Username : "demoemail12@yopmail.com", //yopmail.com dummy email 
            Password : "DF8349649DA4825F6C8ED4A657CD748D597E",
            Port: 2525,
            
    }
    const closeComposeMail=(e)=>{
        e.preventDefault();
        setOpenDialog(false);
        
    }

    const sendMail=(e)=>{
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                Host: config.Host,
                Username: config.Username,
                Password: config.Password,
                To: 'salonisumedhian1996@gmail.com', //data.to, // Recipient email
                From: "salonibansal4545@gmail.com", // Your email
                Subject: "this is subject", //data.subject,
                Body: "hi i am the body" //data.body
            }).then(
                message => alert(message) // Alert success or failure message
            ).catch(
                error => alert('Failed to send email: ' + error) // Handle errors gracefully
            );
        } else {
            alert('SMTP library not loaded. Please check your script tag.');
        }

        // Email.send({
        //     SecureToken : "08838b08-1fef-427f-9d18-f9af6d69a39b",
        //     To : 'salonibansal4545@gmail.com',
        //     From : "salonibansal4545@gmail.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        // }).then(
        //   message => alert(message)
        // );

        setOpenDialog(false);
        
    }

    // const onValueChange=(e)=>{
    //     setData({...data,[e.target.name]:e.target.value});
    //     console.log(data);

    // }

    return(

        <Dialog
        open={openDialog}
        PaperProps={{sx: dialogStyle}}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />

            </Header>
            <Receipnt>
                <InputBase placeholder="Recipients" name="to" /*onChange={(e)=> onValueChange(e)}*/ />
                <InputBase placeholder="Subject" name="subject" /*onChange={(e)=> onValueChange(e)} */ />

            </Receipnt>
            <TextField
            multiline
            rows={17} 
            sx={{'& .MuiOutlinedInput-notchedOutline': {border: 'none'}}} 
            name="body"
            /*onChange={(e)=> onValueChange(e)}*/
            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)} >Send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)}/>

            </Footer>
        </Dialog>
    )
}
export default ComposeMail;