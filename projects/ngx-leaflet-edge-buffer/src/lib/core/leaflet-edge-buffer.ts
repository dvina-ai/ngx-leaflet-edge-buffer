import * as L from 'leaflet';

declare module 'leaflet' {
	interface TileLayerOptions {
		edgeBufferTiles?: number;
	}
}