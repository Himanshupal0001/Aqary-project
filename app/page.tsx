import Link from 'next/link';
import { Card, CardContent, CardActions, Button, Typography, Box, Grid } from '@mui/material';
export interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page() {
    const data = await getData();
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}> {/* Center posts vertically and horizontally */}
            <Grid container spacing={2} sx={{ maxWidth: '600px' }}>
                {data.map((post: IPosts) => (
                    <Grid item xs={12} key={post.id}>
                        <Link
                            href={{ pathname: `/posts/${post.id}`, query: { title: post.title, body: post.body } }}
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: 4, padding: '16px' }}> {/* Facebook post-like styling */}
                                <CardContent>
                                    <Typography variant="body2">{post.body}</Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="caption">{post.title}</Typography>
                                    <Button size="small">Comments</Button>
                                </CardActions>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

