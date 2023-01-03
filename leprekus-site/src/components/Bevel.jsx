export const Bevel = ({ width=150, height=150, src=''}) => {
    const bevel = {
        backgroundColor: 'red',
        width: width,
        height: height,
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        backgroundImage: `url(${src})`
    }
    return (
        <div style={bevel}>
        </div>
        )
}