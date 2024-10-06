import { Button, Grid, Input, Paper, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    return (
        <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>User Form</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        component={'label'}
                        htmlFor="id"
                        sx={{
                            color: '#333333',
                            marginRight: '20px',
                            fontSize: '16px',
                            display: 'block',
                        }}
                    >
                        ID
                    </Typography>
                    <Input
                        type="number"
                        id="id"
                        name="id"
                        sx={{ width: '100%', borderRadius: '5px', border: '1px solid #cccccc', padding: '8px' }}
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography
                        component={'label'}
                        htmlFor="name"
                        sx={{
                            color: '#333333',
                            marginRight: '20px',
                            fontSize: '16px',
                            display: 'block',
                        }}
                    >
                        Name
                    </Typography>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        sx={{ width: '100%', borderRadius: '5px', border: '1px solid #cccccc', padding: '8px' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#00c6c6', color: '#ffffff', '&:hover': { backgroundColor: '#00a5a5' } }}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserForm;
