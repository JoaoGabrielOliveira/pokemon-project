class Type < ApplicationRecord
    has_many :pokemon

    def self.listall
        Type.all.each do |t|
            puts t.name
        end
    end
end
