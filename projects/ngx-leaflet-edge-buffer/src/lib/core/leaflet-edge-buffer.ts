import * as L from 'leaflet';

declare module 'leaflet' {
	interface GridLayerOptions {
		edgeBufferTiles?: number;
	}
}
