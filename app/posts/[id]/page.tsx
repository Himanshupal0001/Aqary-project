import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
export interface IPostId {
    params: { id: number }
}

export interface IComments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

async function getData(id: number) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments', { method: 'GET' })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await res.json();
        const filteredComments = data?.filter((comment: IComments) => comment.postId == id);
        return filteredComments;
    }
    catch (err) {
        console.log(err)
    }
}

export async function page({ params, searchParams }: IPostId & { searchParams: { title: string, body: string } }) {
    const title = searchParams.title;
    const body = searchParams.body;
    const id = params.id;
    const comments = await getData(id);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', overflow: 'hidden', flexDirection: 'column' }}> {/* Center entire content vertically and horizontally */}
            {title && body && (
                <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}> {/* Center title and body within their container */}
                    <h2>{title}</h2>
                    <p>{body}</p>
                </Box>
            )}
            <Box sx={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: 4, maxWidth: '600px', margin: 'auto' }}> {/* Boxy container with limited width and auto-margin for centering */}
                {/* Responsive Grid Container for Comments */}
                <Grid container spacing={2}>
                    {comments.map((comment: IComments) => (
                        <Grid item xs={12} key={comment.id}> {/* Each comment occupies full width on smaller screens */}
                            <Card sx={{ backgroundColor: 'white', borderRadius: 4, padding: '16px' }}> {/* Boxy card style */}
                                <CardContent>
                                    <Typography variant="body2" sx={{ textDecoration: 'none' }}>
                                        {comment.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default page


