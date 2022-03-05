import './App.css';
import Header from './Header/Header';
import MetalMeta from './MetalMeta/MetalMeta';
import BandInfo from './BandInfo/BandInfo';
import BandData from './metal.json';

function App() {
	const bands = BandData.map(({ ID, band_name, fans, formed, origin, split, style }) => {
		return (
			<BandInfo
				key={band_name}
				id={ID}
				band_name={band_name}
				fans={fans}
				formed={formed}
				origin={origin}
				split={split}
				style={style}
			/>
		);
	});
	return (
		<div className="App">
			<Header />
			<MetalMeta />
			<div className="bands-list">{bands}</div>
		</div>
	);
}

export default App;
