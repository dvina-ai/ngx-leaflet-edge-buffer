/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

import { NgModule } from '@angular/core';

import { LeafletEdgeBufferDirective } from './core/leaflet-edge-buffer.directive';

@NgModule({
	exports: [LeafletEdgeBufferDirective],
	declarations: [LeafletEdgeBufferDirective],
})
export class LeafletEdgeBufferModule {}
