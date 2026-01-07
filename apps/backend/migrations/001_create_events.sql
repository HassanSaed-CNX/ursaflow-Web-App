CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  aggregate_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_ts TIMESTAMPTZ NOT NULL,
  payload JSONB NOT NULL CHECK (jsonb_typeof(payload) = 'object')
) PARTITION BY RANGE (event_ts);

CREATE INDEX IF NOT EXISTS events_payload_gin ON events USING GIN (payload jsonb_ops);
CREATE INDEX IF NOT EXISTS events_aggregate_ts_idx ON events (aggregate_id, event_ts);

CREATE TABLE IF NOT EXISTS events_2024_01 PARTITION OF events
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
