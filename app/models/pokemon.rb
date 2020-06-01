class Pokemon < ApplicationRecord
    belongs_to :type, polymorphic: true
end