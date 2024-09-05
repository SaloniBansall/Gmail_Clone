import {Photo, StarOutlined,SendOutlined, InsertDriveFileOutlined,
    DeleteOutlined, MailOutlined
} from '@mui/icons-material';

export const SIDEBAR_DATA=[
    {
        name:'inbox',
        title: 'Inbox',
        icon: Photo
    },
    {
        name:'starred',
        title: 'Starred',
        icon: StarOutlined
    },
    {
        name:'sent',
        title: 'Sent',
        icon: SendOutlined
    },
    {
        name:'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined
    },
    {
        name:'bin',
        title: 'Bin',
        icon: DeleteOutlined
    },
    {
        name:'allMails',
        title: 'All Mails',
        icon: MailOutlined
    }
    
];