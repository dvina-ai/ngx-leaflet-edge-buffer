/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

import { Directive } from '@angular/core';

import 'leaflet-edgebuffer';

@Directive({
	selector: '[leafletEdgeBuffer]',
})
export class LeafletEdgeBufferDirective {
	constructor() {}
}
