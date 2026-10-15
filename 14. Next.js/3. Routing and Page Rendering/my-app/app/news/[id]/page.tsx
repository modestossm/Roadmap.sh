interface PageParams {
  params: {
    id: string;
  };
}

export default function NewsPage({params}: PageParams) {
    const newsId = params.id;

    return (
        <>
            <h1>News Detail Page</h1>
            <p>News ID: {newsId}</p>

        </>
    );
}