import AlbumList from './components/AlbumList'

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Bài Hát Yêu Thích Tháng 10/2022',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/10/05/7/0/4/5/1664967051885_300.jpg'
        },
        {
            id: 2,
            name: 'Nhạc US-UK Hot Tháng 10/2022',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/10/04/f/7/9/f/1664849287981_300.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Hàn Quốc Hot Tháng 10/2022',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/10/03/3/2/7/d/1664787316762_300.jpg'
        },
        {
            id: 4,
            name: 'Nhạc Hoa Hot Tháng 10/2022',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/10/03/3/2/7/d/1664787129604_300.jpg'
        },
    ]
    
    return (
        <div style={{padding: "0 10px"}}>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    )
}

export default AlbumFeature