import assert from 'node:assert/strict';
import { source } from '@x12i/memorix-generic-connector';
const { renderDeep } = source;
const context = { config: { baseUrl: 'https://provider.example.invalid' }, scope: { partition: 'fixture' }, source: {},
  checkpoint: { cursor: 'page-2' }, page: {}, outputs: {}, now: '2026-01-01T00:00:00Z',
};
const request = renderDeep({ url: '${{ config.baseUrl }}/items', query: { cursor: '${{ checkpoint.cursor }}', partition: '${{ scope.partition }}' } }, context);
assert.equal(request.url, 'https://provider.example.invalid/items');
assert.equal(request.query.cursor, 'page-2');
assert.equal(request.query.partition, 'fixture');
console.log(request);
// Request preparation only: no provider request is sent.
