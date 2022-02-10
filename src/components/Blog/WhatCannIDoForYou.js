//styles
import useStyles from './css/css'

//media
import odaiBild from './media/odai.jpg'

//mui components    
import * as a from '@mui/material';




function WhatCannIDoForYou(){
    const classes = useStyles();

    return (
        <>

            <div className={classes.whatCannIDoForYouContainer}>
                <a.Typography sx={{marginBottom: '60px', fontSize: '2rem', lineHeight: '2.375rem', fontWeight: '600'}}>
                    Was kann ich für Sie tun?
                </a.Typography>
                <div className={classes.contentContainer}>
                    <a.Box sx={{ display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                        <a.Typography sx={{textTransform: 'uppercase', fontWeight: '800',
                            fontSize: '0.75rem',
                            marginBottom: '15px'}}>
                            Ich warte auf Ihre Meldung
                        </a.Typography>
                        <a.Typography sx={{fontSize: '20px',lineHeight: '1.1rem'}}>
                            All news about our agency group can be found here. 
                            You can also join our press mailing list – it's worth it. 
                            We regularly have things to share – be it about new projects, 
                            exciting developments or current events
                        </a.Typography>
                    </a.Box>
                    <div className={classes.avatarContainer}>
                        <a.Avatar alt="Remy Sharp"  src={odaiBild} sx={{ width: '280px', height: '280px', marginRight: '70px', marginLeft:'70px' }}/>
                    </div>
                    <a.Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                        <a.Typography sx={{textTransform: 'uppercase', fontWeight: '800',
                            fontSize: '0.75rem',
                            marginBottom: '15px'}}>
                            CONTACT
                        </a.Typography>
                        <a.Typography sx={{fontSize: '20px',lineHeight: '1.1rem'}}>
                            All news about our agency group can be found here. 
                            You can also join our press mailing list – it's worth it. 
                            We regularly have things to share – be it about new projects, 
                            exciting developments or current events
                        </a.Typography>
                    </a.Box>
                </div> 
            </div>

        </>
    )
}


export default WhatCannIDoForYou;