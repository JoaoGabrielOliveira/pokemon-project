module ApplicationHelper
    def exist_file_from_url(url)
        require 'net/http'
        uri = URI(url)
        res = Net::HTTP.get_response(uri)
        return res.code.to_i == 200 ?  true : false
    end

    def add_space_name(str, space = ' ')
        if str.index("-") > -1
            name = str.split('-')

            return name[0].capitalize + space + name[1].capitalize
        end
    end
end
