"""Adding is_deleted

Revision ID: b4645870f298
Revises: 02eda17d1e9b
Create Date: 2021-02-28 04:09:39.510975

"""
import geoalchemy2
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "b4645870f298"
down_revision = "02eda17d1e9b"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index("idx_events_geom", table_name="events")
    op.drop_index("idx_nodes_geom", table_name="nodes")
    op.drop_index("idx_page_versions_geom", table_name="page_versions")
    op.add_column("users", sa.Column("is_deleted", sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("users", "is_deleted")
    op.create_index("idx_page_versions_geom", "page_versions", ["geom"], unique=False)
    op.create_index("idx_nodes_geom", "nodes", ["geom"], unique=False)
    op.create_index("idx_events_geom", "events", ["geom"], unique=False)
    # ### end Alembic commands ###
